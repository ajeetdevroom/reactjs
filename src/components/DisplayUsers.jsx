
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
    const data = useSelector((state)=>{
        return state.users //state of store
    })
    console.log("dispaly data",data)
    const dispatch = useDispatch();
    const deletefun = (id) =>{
        dispatch(removeUser(id));
    }
  return <Wrapper>
    {
      data.map((user, id) => {
        return <li key={id}>
          {user}
          <button onClick={()=>{deletefun(id)}} >
          Delete
          </button>
        </li>
      })
    }
  </Wrapper>
}

const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`

export default DisplayUsers;
