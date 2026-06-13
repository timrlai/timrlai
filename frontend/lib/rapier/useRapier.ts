import { ref } from "vue";
import { Mesh, Vector3 } from "three";
import {
  World,
  RigidBody,
  RigidBodyDesc,
  ColliderDesc,
  init,
} from "@dimforge/rapier3d-compat";

export default function useRapier() {
  const world = ref<World | null>(null);
  const bodies = ref<{ mesh: Mesh; body: RigidBody }[]>([]);

  const initRapier = async (gravity = new Vector3(0, -9.81, 0)) => {
    await init();
    world.value = new World(gravity);
  };

  const addRigidBody = (
    mesh: Mesh,
    rigidBodyDesc: RigidBodyDesc,
    colliderDesc: ColliderDesc,
  ) => {
    if (!world.value) return;

    const body = world.value.createRigidBody(rigidBodyDesc);
    world.value.createCollider(colliderDesc, body);

    bodies.value.push({ mesh, body });

    return body;
  };

  const step = (dt: number) => {
    if (!world.value) return;

    world.value.timestep = dt;
    world.value.step();

    bodies.value.forEach(({ mesh, body }) => {
      const translation = body.translation();
      const rotation = body.rotation();
      mesh.position.set(translation.x, translation.y, translation.z);
      mesh.quaternion.set(rotation.x, rotation.y, rotation.z, rotation.w);
    });
  };

  return { world, bodies, initRapier, addRigidBody, step };
}
