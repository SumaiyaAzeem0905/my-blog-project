package com.blog.backend.service;

import com.blog.backend.entity.Post;

import java.util.List;

public interface PostService {
    Post savePost(Post post);

    List<Post> getAllPosts();

    Post getPostById(Long postId);

    void likePost(Long postId);

    List<Post> searchByName(String name);

    Post updatePost(Long postId, Post updatedPost);

    void deletePost(Long postId);
}
