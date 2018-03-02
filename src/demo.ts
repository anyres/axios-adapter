import {
  Anyres,
  AnyresCRUD,
  IResCreate,
  IResGet,
  IResQuery,
  IResQueryResult,
  IResUpdate,
} from "@anyres/core";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import { AxiosAdapter } from ".";

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
  httpAdapter: new AxiosAdapter(),
})
class TestAxiosAdapter extends AnyresCRUD<
IPostQuery,
IPostQueryResult,
IPostGet,
IPostCreate,
IPostUpdate
> {

}
const testAxiosAdapter = new TestAxiosAdapter();
let post: IPostGet = null;
testAxiosAdapter.create({
  title: "demo",
})
  .switchMap((res) => {
    console.log(res);
    post = res;
    return testAxiosAdapter.get(post.id);
  })
  .switchMap((res) => {
    console.log(res);
    return testAxiosAdapter.update({
      id: post.id,
      title: "title changed",
    });
  })
  .switchMap((res) => {
    console.log(res);
    return testAxiosAdapter.remove(post.id);
  })
  .switchMap((res) => {
    console.log(res);
    return testAxiosAdapter.query();
  })
  .subscribe((res) => console.log(res));

