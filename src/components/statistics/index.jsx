import React from "react";
import GitHubCalendar from "react-github-calendar";

import "./index.scss";

const Statistics = () => {
  return (
    <>
      <h1>Statistics</h1>
      <div id="statistics">
        <img
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com?user=himanshuShukla55&theme=light&card_width=460"
          alt="GitHub Streak"
        />

        <picture>
          <source
            srcSet="https://github-readme-stats.vercel.app/api?username=himanshuShukla55&show_icons=true"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=himanshuShukla55&show_icons=true"
          />
        </picture>
        <img
          id="github-top-langs"
          height="195"
          align="center"
          width="450"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=himanshuShukla55&layout=compact&langs_count=8&card_width=320"
        />
      </div>
      <GitHubCalendar username="himanshushukla55" colorScheme="light" />
    </>
  );
};

export default Statistics;
