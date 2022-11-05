import AddGoalButton from "../components/AddGoalButton";
import {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

const KidDetails = ({accessCode, validAccessCode}) => {

  const [kid, setKid] = useState({})
  const{id} = useParams()

  useEffect(() => {
    axios.get('http://localhost:8000/api/kids/' + id)
      .then( res => {
        setKid(res.data)
      })
      .catch( err => console.log(err))
  }, [kid]) 

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1 className="text-white">{`${kid.name}`}'s Goals</h1>
      <div className="goal-list w-50">
        { kid.goals &&
          <table className="table bg-white">
            <tbody>
                {
                  kid.goals.map((goal)=>(
                    <tr key={goal._id}>
                      <td>                          
                        <Link to={`/kids/${kid._id}/goals/${goal._id}`}>
                          {goal.summary}
                        </Link>
                      </td>
                      <td>{goal.awardedStars}</td>
                      <td>/</td>
                      <td>{goal.totalStars}</td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
        }
      </div>
      {
        accessCode === validAccessCode &&
        <AddGoalButton kidId={kid._id}/>
      }
    </div>
  );
};

export default KidDetails;
