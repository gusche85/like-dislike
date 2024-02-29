import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

export default function App() {
  const [likeCount, setLikeCount] = useState(0)
  const [dislikeCount, setDislikeCount] = useState(0)
  const total = likeCount + dislikeCount;
  const likePercentage = (likeCount/total)*100 || 0;
  const dislikePercentage = (dislikeCount/total)*100 || 0;

function increaseLike() {
  setLikeCount(likeCount + 1)
}

function dislike() {
  setDislikeCount(dislikeCount + 1)
}

return (
  <>
    <div className="text-center">
  <Button variant="success m-3" onClick={increaseLike}>Like {likeCount} </Button>
    <Button variant="danger m-3" onClick={dislike}>Dislike {dislikeCount} </Button>
    </div>
    <div>
      <ProgressBar>
        <ProgressBar variant="success" now={likePercentage} key={1} />
        <ProgressBar variant="danger" now={dislikePercentage} key={2} />
      </ProgressBar>
    </div>
  </>
)
}