import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import CommentForm from "../components/CommentForm";
import CommentTree from "../components/CommentTree";
import { useQuery, useMutation } from "@apollo/client";
import { GET_POST, GET_COMMENTS } from "../graphql/queries";
import { ADD_COMMENT } from "../graphql/mutations";

const useStyles = makeStyles({
  paper: {
    marginTop: 80,
  },
});

function PostPage(props) {
  const location = useLocation();
  const post_id = parseInt(location.pathname.split("/")[2]);

  const classes = useStyles();

  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  const { data: getPostData } = useQuery(GET_POST, {
    variables: { post_id: post_id },
  });

  const { data: getCommentsData } = useQuery(GET_COMMENTS, {
    variables: { post_id: post_id },
  });

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [
      { query: GET_POST, variables: { post_id: post ? post.post_id : null } },
      {
        query: GET_COMMENTS,
        variables: { post_id: post ? post.post_id : null },
      },
    ],
  });

  useEffect(() => {
    if (getPostData) {
      setPost(getPostData.post);
    }
  }, [getPostData]);

  useEffect(() => {
    if (getCommentsData) {
      setComments(getCommentsData.comments);
    }
  }, [getCommentsData]);

  const handleAddComment = (message) => {
    addComment({
      variables: {
        parent_comment_id: null,
        post_id: post.post_id,
        message: message,
      },
    });
  };

  return (
    <Container component="main">
      <NavBar />

      {post && (
        <Paper className={classes.paper} elevation={0}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <PostCard post={post} />
            </Grid>

            <Grid item>
              <CommentForm
                open={true}
                showCancelButton={false}
                onSubmit={handleAddComment}
              />
            </Grid>

            <Grid item>
              <CommentTree
                comments={comments}
                comment_ids={post.comments_info.comment_ids}
              />
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
}

export default PostPage;