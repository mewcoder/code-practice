import { LazyMan } from "../lazyman";

describe("lazyman", () => {
  const me = new LazyMan("Tom");
  me.eat("dinner").eat("supper").sleep(5).eat("lunch");
});
