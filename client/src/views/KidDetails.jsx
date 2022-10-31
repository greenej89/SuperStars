import React from "react";
import AddGoalButton from "../components/AddGoalButton";

const KidDetails = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h1 className="text-white">Kid's Goals</h1>
      <div className="goal-list w-50">
        <table class="table bg-white">
          <tbody>
            <tr>
              <td>Clean Up Toys</td>
              <td>3</td>
              <td>/</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Be Nice to Brother</td>
              <td>7</td>
              <td>/</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Do Not Cry at Bedtime</td>
              <td>1</td>
              <td>/</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Wash Hands Before Dinner</td>
              <td>20</td>
              <td>/</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddGoalButton/>
    </div>
  );
};

export default KidDetails;
