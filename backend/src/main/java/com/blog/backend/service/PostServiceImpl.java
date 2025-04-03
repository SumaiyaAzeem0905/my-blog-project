package com.blog.backend.service;

import com.blog.backend.entity.Post;
import com.blog.backend.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    public Post savePost(Post post){
        post.setLikeCount(0);
        post.setViewCount(0);
        post.setDate(new Date());
        return postRepository.save(post);
    }

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post getPostById(Long postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        if (optionalPost.isPresent()){
            Post post = optionalPost.get();
            post.setViewCount(post.getViewCount() + 1);
            return postRepository.save(post);
        } else {
            throw new EntityNotFoundException("Post Not Found");
        }
    }

    @Override
    public void likePost(Long postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        if (optionalPost.isPresent()){
            Post post = optionalPost.get();
            post.setLikeCount(post.getLikeCount() + 1);
            postRepository.save(post);
        } else {
            throw new EntityNotFoundException("Post Not Found");
        }
    }

    @Override
    public Post updatePost(Long postId, Post updatedPost) {
        Optional<Post> postOpt = postRepository.findById(postId);
        if (postOpt.isPresent()) {
            Post existingPost = postOpt.get();
            existingPost.setName(updatedPost.getName());
            existingPost.setContent(updatedPost.getContent());
            existingPost.setPostedBy(updatedPost.getPostedBy());
            existingPost.setImage(updatedPost.getImage());
            existingPost.setDate(updatedPost.getDate());
            existingPost.setLikeCount(updatedPost.getLikeCount());
            existingPost.setViewCount(updatedPost.getViewCount());
            existingPost.setTags(updatedPost.getTags());
            return postRepository.save(existingPost);
        } else {
            throw new EntityNotFoundException("Post not found with id " + postId);
        }
    }

    @Override
    public void deletePost(Long postId) {
        Optional<Post> postOpt = postRepository.findById(postId);
        if (postOpt.isPresent()) {
            postRepository.delete(postOpt.get());
        } else {
            throw new EntityNotFoundException("Post not found with id " + postId);
        }
    }

    @Override
    public List<Post> searchByName(String name) {
        return postRepository.findAllByNameContaining(name);
    }
}
