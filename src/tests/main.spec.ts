import { Anyres, AnyresCRUD } from "@anyres/core";
import * as jsonServer from "json-server";
import { AxiosAdapter } from "..";

// const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router({
  posts: [{
    id: 1,
    title: "json-server",
    author: "typicode",
  }],
});
const middlewares = jsonServer.defaults();

export interface IPostQuery {
}
export interface IPostQueryResult {
}
export interface IPostGet {
  id?: number;
  title?: string;
}
export interface IPostCreate {
}
export interface IPostUpdate {
  id: string | number;
  title?: string;
}

@Anyres({
  path: "http://localhost:3000/posts",
  httpAdapterStatic: new AxiosAdapter(),
})
class TestAxiosAdapter extends AnyresCRUD<
IPostQuery,
IPostGet[],
IPostGet,
IPostCreate,
IPostUpdate
> {

}



describe("test AxiosAdapter", () => {
  const testAxiosAdapter = new TestAxiosAdapter();
  let app;
  let post: IPostGet;
  beforeAll((done) => {
    server.use(middlewares);
    server.use(router);
    app = server.listen(3000, () => {
      done();
    });
  });
  afterAll(() => {
    app.close();
  });

  test("query posts", () => {
    return testAxiosAdapter.query().toPromise().then((res) => {
      expect(res[0].id).toBe(1);
    });
  });
  test("create post", () => {
    return testAxiosAdapter.create({
      title: "demo",
    }).toPromise().then((res) => {
      post = res;
      expect(res.id).toBe(2);
    });
  });
  test("get post", () => {
    return testAxiosAdapter.get(post.id).toPromise().then((res) => {
      expect(res.id).toBe(post.id);
    });
  });
  test("update post", () => {
    return testAxiosAdapter.update({
      id: post.id,
      title: "title changed",
    }).toPromise().then((res) => {
      expect(res.title).toBe("title changed");
    });
  });
  test("delete post", () => {
    return testAxiosAdapter.remove(post.id).toPromise().then((res) => {
      expect(true).toBe(true);
    });
  });
});
