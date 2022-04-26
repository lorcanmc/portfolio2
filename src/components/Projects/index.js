import Project from "../Project";

export default function Projects() {
  return (
    <div className="projects-container">
      <Project
        name="Animle"
        video="videos/animle.mp4"
        description={
          <div>
            <p>
              I've been making an online game that I call Animle, over the past
              few weeks, based on Wordle. I heard that Wordle was made in
              vanilla JS and I've been enjoying some of the Wordle clones like
              Quordle recently which inspired me to make my own game in React.
            </p>
            <p>
              I decided to theme the app around animals and their habitat after
              considering a few ideas. I think having a map adds another skill
              to the word game.
            </p>
            <p>
              Most recent feature I added was a button allowing a user to copy
              their score once they get the correct answer. It's such an
              important part of what make Wordle interactive and shareable.
            </p>
          </div>
        }
        appLink="https://lnkd.in/e_6GvNfj"
        githubLink="https://lnkd.in/ehn-cJWn"
      />
      <Project
        name="Alotify"
        video="/images/alotify.png"
        description={
          <div>
            <p>
              A music exploration app. Designed to recreate
              the look and feel of Spotify with the functionality to find your
              favourite songs and add them to your favourites.
            </p>
            <p>This React front end connects to the ITunes API from Apple</p>
            <p>I was having issues with CORS Headers on data coming from ITunes so I routed through CORS middleware hosted on Heroku </p>
          </div>
        }
        appLink="https://alotify-app.netlify.app/"
        githubLink="https://github.com/lorcanmc/SpotifyItunesClone"
      />
    </div>
  );
}
