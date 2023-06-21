import { parseISO, formatDistanceToNow } from "date-fns-jalali";

const ShowTime = ({ timestamp }) => {
    let timeAgo = "";
    if (timestamp) {
        const date = parseISO(timestamp);
        const time = formatDistanceToNow(date);
        timeAgo = `${time} بعد`;
    }

    return (
        <span style={{fontSize: "10px", color: "rgb(100,100,100)", marginTop: "50px"}}>
            <i>{timeAgo}</i> &nbsp;
        </span>
    );
};

export default ShowTime;