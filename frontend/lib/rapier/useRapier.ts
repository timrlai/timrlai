import { ref } from "vue";
import { Mesh, Vector3 } from "three";
import {
  World,
  RigidBody,
  RigidBodyDesc,
  ColliderDesc,
  init,
} from "@dimforge/rapier3d-compat";

const world = ref<World | null>(null);
const bodies: { mesh: Mesh; body: RigidBody }[] = [];

export default function useRapier() {
  const initRapier = async (gravity = new Vector3(0, -1, 0)) => {
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

    bodies.push({ mesh, body });

    return body;
  };

  const step = (dt: number) => {
    if (!world.value || bodies.length === 0) return;

    world.value.timestep = dt;
    world.value.step();

    bodies.forEach(({ mesh, body }) => {
      if (body.isFixed()) return;
      if (body.isDynamic() && !body.isSleeping()) {
        const translation = body.translation();
        const rotation = body.rotation();
        mesh.position.set(translation.x, translation.y, translation.z);
        mesh.quaternion.set(rotation.x, rotation.y, rotation.z, rotation.w);
      }
    });
  };

  return { world, bodies, initRapier, addRigidBody, step };
}
