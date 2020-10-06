import React from "react";

const Loading = () => {

  return (
    <div class="card">
        <div class="card-header">
            The Index
        </div>
        <div class="card-body">
            <h5 class="card-title">Waiting for promises</h5>
            <p class="card-text">Page is loading please wait</p>
            <img
            className="card-img-top img-fluid"
            src={"https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/giphy-1-1.gif"}
          />
        </div>
    </div>
  );
};

export default Loading;
