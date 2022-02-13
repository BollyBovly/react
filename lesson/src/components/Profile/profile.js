import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeShowName } from '../../Store/profile-redux/action';
import { store } from '../../Store/index';

export const Profile = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state);
	console.log(data);

	const handleChangeShown = () => {
		dispatch(changeShowName);
	};

	return (
		<>
			<div className="Profile"></div>

			{data.showName && <span> {data.name}</span>}
			<button onClick={handleChangeShown}>Change show name</button>
		</>
	);
};
