import "./card.css"
import Tooltip from '@mui/material/Tooltip';

export default ({
    imgSrc,
    followersCount,
    label,
    songsCount

}) => {
    return (
        <Tooltip title={`${songsCount} songs`} arrow>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-img-frame">
                    <img  className="card-img" src={imgSrc} alt="" />
                </div>
                <div className="card-content">
                    <span className="card-content-pill">
                        {followersCount} follows
                    </span>

                </div>

            </div>
            <p className="card-label">{label}</p>
        </div>
        </Tooltip>
    )


}