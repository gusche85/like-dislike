import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

export default function App() {
  const [likeCount, setLikeCount] = useState(0)
  const [dislikeCount, setDislikeCount] = useState(0)
  const total = likeCount + dislikeCount;
  const likePercentage = total === 0 ? 0 : ((likeCount / total) * 100).toFixed(2);
  const dislikePercentage = total === 0 ? 0 : ((dislikeCount / total) * 100).toFixed(2);
  console.log(likePercentage, dislikePercentage);

function increaseLike() {
  setLikeCount(likeCount + 1)
}

function dislike() {
  setDislikeCount(dislikeCount + 1)
}

return (
  <>
    <div className="d-flex flex-column align-items-center justify-content-center">
    <div className="text-center m-3 mt-4">
  <Button variant="success m-3" onClick={increaseLike}>Like {likeCount} </Button>
    <Button variant="danger m-3" onClick={dislike}>Dislike {dislikeCount} </Button>
    </div>
    <div className="m-3" style={{ width: '60%'}}>
      <ProgressBar>
        <ProgressBar variant="success" now={likePercentage} key={1} />
        <ProgressBar variant="danger" now={dislikePercentage} key={2} />
      </ProgressBar>
    </div>
  </div>
  </>
)
}