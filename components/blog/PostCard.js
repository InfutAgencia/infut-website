import Link from "next/link";
import {
  Card,
  CardBody,
  CardHead,
  Img,
  PostDescription,
  PostTitle,
  Caption,
  ReadButton,
} from "./Blog.elements";

const PostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card key={`${post._id}_card`}>
        <CardHead key={`${post._id}_head`}>
          <Img
            src={post.postData[0].image.formats.medium.url}
            alt={post.postData[0].image.name}
          />
        </CardHead>
        <CardBody key={`${post._id}body`}>
          <PostTitle>{post.title}</PostTitle>
          <Caption>{post.published_at.split("T")[0]}</Caption>
          <PostDescription>{post.description.slice(0, 100)}...</PostDescription>
          {/* <ReadButton>Leer</ReadButton> */}
        </CardBody>
      </Card>
    </Link>
  );
};

export default PostCard;
