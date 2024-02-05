import style from './Information.module.css';

export const InformationLayout = ({ status }) => {
	return <div className={style.info}>{status}</div>;
};
