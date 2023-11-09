import { GithubUser } from "./github-user-interface";

export interface GithubUsersResponse {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}