import React from "react";
import userImage from "@/assets/images/resources/user-pic.png";
import { CreateJobPopup } from "./CreateJobPopup";

export const CreateBar = () => {

  return (
    <div className="post-topbar">
      <div className="user-picy">
        <img src={userImage} alt="" />
      </div>
      <div className="post-st">
        <ul>
          <li>
            <a className="post_project" href="#" title="">
              Post a Project
            </a>
          </li>
          <li>
            <a className="post-jb active" href="#" title="">
              Post a Job
              <CreateJobPopup />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// const post = {
//   authot: {
//     name: 'Атабек',
//     photoURL: '',
//   },
//   rote: 'Epic Coder',
//   title: 'Senior Frontend',
//   jobType: 'Full Time',
//   rate: 30,
//   description: 'один два три',
//   tags: 'html,php,css,react',
//   location: BIsh,
//   createdAt: new Date(),
//   likes: [
//     {
//       photoURL: '',
//       userId: 'dsa'
//     },
//   ],
//   comments: [],
//   views: 0,
// }