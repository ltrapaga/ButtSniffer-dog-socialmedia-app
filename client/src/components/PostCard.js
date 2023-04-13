import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

import { AuthContext } from '../context/auth';
// import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
// import MyPopup from '../util/MyPopup';

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  const { user } = useContext(AuthContext);

  function likePost() {
    console.log('Like post!!')
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={NavLink} to={`/posts/${id}`}>
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <LikeButton user={user} post={{ id, likes, likeCount }} />
        <MyPopup content="Comment on post"> */}
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="red" basic>
            <Icon name="heart" />
          </Button>
          <Label basic color="blue" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button labelPosition="right" as={NavLink} to={`/posts/${id}`}>
          <Button color="blue" basic>
            <Icon name="comments" />
          </Button>
          <Label basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
        {/* </MyPopup> */}
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  );
}

export default PostCard;
