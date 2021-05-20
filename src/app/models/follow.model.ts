import { JsonApiAttribute, JsonApiRelationship, JsonApiType } from "../utils/json-api/json-api-annotations";
import { JsonApiModel } from "../utils/json-api/json-api-model";
import { User } from "./user.model";

@JsonApiType("follows")
export class Follow extends JsonApiModel {
  @JsonApiAttribute() createdAt: string;
  @JsonApiAttribute() updatedAt: string;

  @JsonApiRelationship() follower: User;
  @JsonApiRelationship() followed: User;
}
