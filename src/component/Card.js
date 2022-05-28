/**
 * @author: Bivash Pandey
 */

import "../styles/Card.css";

function Card(props) {
  return (
    <div className="course">
      <div className="course-info">
        <h6>{props.item.category}</h6>
        <h2>{props.item.title}</h2>
        <div className="uniAndBy">
          <h6>{props.item.university}</h6>
          <h6>{props.item.by}</h6>
        </div>

        <div className="links">
          <a
            href={props.item.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-youtube-play"></i>
            {props.item.channel}
          </a>
          <br />
          {props.item.website.length > 0 && (
            <a
              href={props.item.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-file"></i>
              Course Materials
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
