import AddGoalButton from "../components/AddGoalButton";
import {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const KidDetails = () => {

  const [kid, setKid] = useState({})
  const{id} = useParams()
  const navigate = useNavigate()

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
                      <td>{goal.summary}</td>
                      <td>{goal.awardedStars}</td>
                      <td>/</td>
                      <td>{goal.totalStars}</td>
                    </tr>
                  ))
                }
              {/* <tr>
                <td>Be Nice to Brother</td>
                <td>7</td>
                <td>/</td>
                <td>10</td>
              </tr> */}
            </tbody>
          </table>
        }
      </div>
      <AddGoalButton/>
    </div>
  );
};

export default KidDetails;