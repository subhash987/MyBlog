import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/blog", pathMatch: "full" },
  { path: "", loadChildren: "./posts/posts.module#PostsModule" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
