export interface Repository {
    readonly id:                           number;
    readonly node_id:                      string;
    readonly name:                         string;
    readonly full_name:                    string;
    readonly private:                      boolean;
    readonly owner:                        Owner;
    readonly html_url:                     string;
    readonly description:                  string;
    readonly fork:                         boolean;
    readonly url:                          string;
    readonly forks_url:                    string;
    readonly keys_url:                     string;
    readonly collaborators_url:            string;
    readonly teams_url:                    string;
    readonly hooks_url:                    string;
    readonly issue_events_url:             string;
    readonly events_url:                   string;
    readonly assignees_url:                string;
    readonly branches_url:                 string;
    readonly tags_url:                     string;
    readonly blobs_url:                    string;
    readonly git_tags_url:                 string;
    readonly git_refs_url:                 string;
    readonly trees_url:                    string;
    readonly statuses_url:                 string;
    readonly languages_url:                string;
    readonly stargazers_url:               string;
    readonly contributors_url:             string;
    readonly subscribers_url:              string;
    readonly subscription_url:             string;
    readonly commits_url:                  string;
    readonly git_commits_url:              string;
    readonly comments_url:                 string;
    readonly issue_comment_url:            string;
    readonly contents_url:                 string;
    readonly compare_url:                  string;
    readonly merges_url:                   string;
    readonly archive_url:                  string;
    readonly downloads_url:                string;
    readonly issues_url:                   string;
    readonly pulls_url:                    string;
    readonly milestones_url:               string;
    readonly notifications_url:            string;
    readonly labels_url:                   string;
    readonly releases_url:                 string;
    readonly deployments_url:              string;
    readonly created_at:                   Date;
    readonly updated_at:                   Date;
    readonly pushed_at:                    Date;
    readonly git_url:                      string;
    readonly ssh_url:                      string;
    readonly clone_url:                    string;
    readonly svn_url:                      string;
    readonly homepage:                     null | string;
    readonly size:                         number;
    readonly stargazers_count:             number;
    readonly watchers_count:               number;
    readonly language:                     null | string;
    readonly has_issues:                   boolean;
    readonly has_projects:                 boolean;
    readonly has_downloads:                boolean;
    readonly has_wiki:                     boolean;
    readonly has_pages:                    boolean;
    readonly has_discussions:              boolean;
    readonly forks_count:                  number;
    readonly mirror_url:                   null;
    readonly archived:                     boolean;
    readonly disabled:                     boolean;
    readonly open_issues_count:            number;
    readonly license:                      License | null;
    readonly allow_forking:                boolean;
    readonly is_template:                  boolean;
    readonly web_commit_signoff_required:  boolean;
    readonly has_pull_requests:            boolean;
    readonly pull_request_creation_policy: PullRequestCreationPolicy;
    readonly topics:                       string[];
    readonly visibility:                   Visibility;
    readonly forks:                        number;
    readonly open_issues:                  number;
    readonly watchers:                     number;
    readonly default_branch:               DefaultBranch;
    readonly permissions:                  Permissions;
    urls:                                  Record<string, string | null | undefined>;
}

export enum DefaultBranch {
    Main = "main",
    Master = "master",
}

export interface License {
    readonly key:     string;
    readonly name:    string;
    readonly spdx_id: string;
    readonly url:     string;
    readonly node_id: string;
}

export interface Owner {
    readonly login:               Login;
    readonly id:                  number;
    readonly node_id:             NodeID;
    readonly avatar_url:          string;
    readonly gravatar_id:         string;
    readonly url:                 string;
    readonly html_url:            string;
    readonly followers_url:       string;
    readonly following_url:       FollowingURL;
    readonly gists_url:           GistsURL;
    readonly starred_url:         StarredURL;
    readonly subscriptions_url:   string;
    readonly organizations_url:   string;
    readonly repos_url:           string;
    readonly events_url:          EventsURL;
    readonly received_events_url: string;
    readonly type:                Type;
    readonly user_view_type:      Visibility;
    readonly site_admin:          boolean;
}

export enum EventsURL {
    HTTPSAPIGithubCOMUsersMauroviverosEventsPrivacy = "https://api.github.com/users/mauroviveros/events{/privacy}",
}

export enum FollowingURL {
    HTTPSAPIGithubCOMUsersMauroviverosFollowingOtherUser = "https://api.github.com/users/mauroviveros/following{/other_user}",
}

export enum GistsURL {
    HTTPSAPIGithubCOMUsersMauroviverosGistsGistID = "https://api.github.com/users/mauroviveros/gists{/gist_id}",
}

export enum Login {
    Mauroviveros = "mauroviveros",
}

export enum NodeID {
    MDQ6VXNlcjQ0MDc2OTE0 = "MDQ6VXNlcjQ0MDc2OTE0",
}

export enum StarredURL {
    HTTPSAPIGithubCOMUsersMauroviverosStarredOwnerRepo = "https://api.github.com/users/mauroviveros/starred{/owner}{/repo}",
}

export enum Type {
    User = "User",
}

export enum Visibility {
    Public = "public",
}

export interface Permissions {
    readonly admin:    boolean;
    readonly maintain: boolean;
    readonly push:     boolean;
    readonly triage:   boolean;
    readonly pull:     boolean;
}

export enum PullRequestCreationPolicy {
    All = "all",
}
