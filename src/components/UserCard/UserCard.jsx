import { useSelector, useDispatch } from 'react-redux';
import { updateAvatar } from '../../redux/auth/authOperations';
import { DayDashboard } from '../DayDashboard/DayDashboard';
// import { LogOutBtn } from '../LogOutBtn/LogOutBtn';

export const UserCard = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleAvatarChange = async (e) => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    try {
      await dispatch(updateAvatar(formData));
    } catch (error) {
      console.error('Failed to update avatar:', error);
    }
  };

  return (
    <div>
      <label htmlFor="avatar">+</label>
      <input type="file" id="avatar" accept="image/*" onChange={handleAvatarChange} />
      <p>{user.name}</p>
      <DayDashboard user={user} />
      <p>
        We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.
      </p>
      {/* <LogOutBtn/> */}
      <button type="button">Logout</button>
    </div>
  );
};

export default UserCard;

