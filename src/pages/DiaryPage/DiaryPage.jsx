import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { selectUser } from '../../redux/auth/authSelectors.js';
import { getDayInfo } from '../../redux/diary/operations.js';
import {
  selectDiaryExercises,
  selectDiaryProducts,
  selectIsLoading,
} from '../../redux/diary/selectors.js';
import TitlePage from '../../components/TitlePage';
import DaySwitch from '../../components/DaySwitch';
import DayDashboard from '../../components/DayDashboard';
import DiaryTableForWhat from '../../components/DiaryTableForWhat';
import { Loader } from '../../components/Loader/Loader.jsx';
import {
  DiaryContainer,
  DiarySwitchWrap,
  DiaryTablesContainer,
  DiaryWrapper,
} from './DiaryPage.styled.js';

const DATE_FORMAT = 'DD/MM/YYYY';

const DiaryPage = () => {
  const [date, setDate] = useState(dayjs().format(DATE_FORMAT));

  const productsList = useSelector(selectDiaryProducts);

  const exercisesList = useSelector(selectDiaryExercises);

  const isLoading = useSelector(selectIsLoading);

  const { createdAt } = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!date) {
      return;
    }

    dispatch(getDayInfo(date));
  }, [date, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <DiaryWrapper>
          <DiarySwitchWrap>
            <TitlePage title="Diary" />

            <DaySwitch date={date} setDate={setDate} minDate={createdAt} />
          </DiarySwitchWrap>

          <DiaryContainer>
            <DayDashboard />

            <DiaryTablesContainer>
              <DiaryTableForWhat
                list={productsList}
                date={date}
                to="/products"
                forProductsTable
              />
              <DiaryTableForWhat
                list={exercisesList}
                date={date}
                to="/exercises"
                forExercisesTable
              />
            </DiaryTablesContainer>
          </DiaryContainer>
        </DiaryWrapper>
      )}
    </>
  );
};

export default DiaryPage;
