import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { selectUser } from '../../redux/auth/authSelectors.js';
import { getDayInfo } from '../../redux/diary/operations.js';
import DaySwitch from '../../components/DaySwitch/index.js';
import DayDashboard from '../../components/DayDashboard/index.js';
import DiaryTableForWhat from '../../components/DiaryTableForWhat/DiaryTableForWhat.jsx';
import { DiaryContainer, DiaryTablesContainer, DiaryWrapper } from './DiaryPage.styled.js';
import {
  selectDiaryExercises,
  selectDiaryProducts,
} from '../../redux/diary/selectors.js';

const DATE_FORMAT = 'DD/MM/YYYY';

const DiaryPage = () => {
  const [date, setDate] = useState(dayjs().format(DATE_FORMAT));

  const productsList = useSelector(selectDiaryProducts);
  const exercisesList = useSelector(selectDiaryExercises);
  const { createdAt } = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!date) {
      return;
    }
    dispatch(getDayInfo(date));
  }, [date, dispatch]);

  return (
    <DiaryWrapper>
      <div>
        <div>
          Title +{' '}
          <DaySwitch date={date} setDate={setDate} minDate={createdAt} />
        </div>
      </div>
      <DiaryContainer>
        <DayDashboard />
        <DiaryTablesContainer>
          <DiaryTableForWhat
            list={productsList}
            date={date}
            to="/products"
            forProductsTable
          />{' '}
          <DiaryTableForWhat
            list={exercisesList}
            date={date}
            to="/exercises"
            forExercisesTable
          />
        </DiaryTablesContainer>
      </DiaryContainer>
    </DiaryWrapper>
  );
};

export default DiaryPage;
