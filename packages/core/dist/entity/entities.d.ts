import { CommentMeta } from './comments/comment-meta.entity';
import { Comment } from './comments/comment.entity';
import { Option } from './options/option.entity';
import { PostMeta } from './posts/post-meta.entity';
import { Post } from './posts/post.entity';
import { TermMeta } from './terms/term-meta.entity';
import { TermRelationships } from './terms/term-relationships.entity';
import { TermTaxonomy } from './terms/term-taxonomy.entity';
import { Term } from './terms/term.entity';
import { UserMeta } from './users/user-meta.entity';
import { User } from './users/user.entity';
export declare const coreEntitiesMap: {
    Option: typeof Option;
    TermMeta: typeof TermMeta;
    TermTaxonomy: typeof TermTaxonomy;
    TermRelationships: typeof TermRelationships;
    Term: typeof Term;
    CommentMeta: typeof CommentMeta;
    Comment: typeof Comment;
    PostMeta: typeof PostMeta;
    Post: typeof Post;
    UserMeta: typeof UserMeta;
    User: typeof User;
};