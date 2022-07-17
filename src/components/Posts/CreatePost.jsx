import React from "react";
import userImage from "@/assets/images/resources/user-pic.png";

export const CreatePost = () => {
  return (
    <div class="post-topbar">
      <div class="user-picy">
        <img src={userImage} alt="" />
      </div>
      <div class="post-st">
        <ul>
          <li>
            <a class="post_project" href="#" title="">
              Post a Project
            </a>
          </li>
          <li>
            <a class="post-jb active" href="#" title="">
              Post a Job
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};