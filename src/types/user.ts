export interface User {
    readonly login:                     string;
    readonly id:                        number;
    readonly node_id:                   string;
    readonly avatar_url:                string;
    readonly gravatar_id:               string;
    readonly url:                       string;
    readonly html_url:                  string;
    readonly followers_url:             string;
    readonly following_url:             string;
    readonly gists_url:                 string;
    readonly starred_url:               string;
    readonly subscriptions_url:         string;
    readonly organizations_url:         string;
    readonly repos_url:                 string;
    readonly events_url:                string;
    readonly received_events_url:       string;
    readonly type:                      string;
    readonly user_view_type:            string;
    readonly site_admin:                boolean;
    readonly name:                      string;
    readonly company:                   string;
    readonly blog:                      string;
    readonly location:                  string;
    readonly email:                     null;
    readonly hireable:                  null;
    readonly bio:                       string;
    readonly twitter_username:          null;
    readonly public_repos:              number;
    readonly public_gists:              number;
    readonly followers:                 number;
    readonly following:                 number;
    readonly created_at:                Date;
    readonly updated_at:                Date;
    readonly private_gists:             number;
    readonly total_private_repos:       number;
    readonly owned_private_repos:       number;
    readonly disk_usage:                number;
    readonly collaborators:             number;
    readonly two_factor_authentication: boolean;
    readonly plan:                      Plan;
}

export interface Plan {
    readonly name:          string;
    readonly space:         number;
    readonly collaborators: number;
    readonly private_repos: number;
}
