// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import dayjs from 'dayjs';
// import { selectUser } from '../../redux/auth/authSelectors.js';
// import { getDayInfo } from '../../services/api/diary.js';
import DaySwitch from '../../components/DaySwitch/index.js';
import DayDashboard from '../../components/DayDashboard/index.js';
import { DiaryContainer, DiaryWrapper } from './DiaryPage.styled.js';

// const DATE_FORMAT = 'DD/MM/YYYY';

const DiaryPage = () => {
  // const [date, setDate] = useState(dayjs().format(DATE_FORMAT));
  // const [exercisesList, setExercisesList] = useState(null); // 1. burnedCalories (спалені під час тренування); 2. totalTime (час в хв витрачений на тренування)

  // const [productsList, setProductsList] = useState(null); // 1. totalCalories (кількість спожитих за день)

  // const user = useSelector(selectUser); // 1.bmr - норма калорій (за день); 2. dpa (денна норма часу тренування хв); 3.blood; 4. createdAt - дата реєстрації const {createdAt, blood, bmr, dpa} = useSelector(selectUser);

  // const restOfCalories = bmr - productsList.totalCalories;
  // const restOfSports = dpa - exercisesList.totslTime;

  // useEffect(() => {
  //   if (date === null) {
  //     return;
  //   }
  //   const fetchDayInfo = async () => {
  //     try {
  //       const resp = await getDayInfo(date);
  //       if (!resp) {
  //         return;
  //       }
  //       setExercisesList(resp.userExercisesDiary);
  //       setProductsList(resp.userProducts.Diary);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchDayInfo();
  // }, [date]);

  // const onChangeDate = (newDate) => {
  //   setDate(newDate);
  // };

  return (
      <DiaryWrapper>
        <div>
          <div>
            Title + <DaySwitch />
          </div>
        </div>
        <DiaryContainer>
          <DayDashboard
          //bmr={bmr}
          //dpa={dpa}
          //caloriesConsumed={productList.totalCalories}
          //caloriesBurned={exercisesList.burnedCalories}
          //restOfCalories={restOfCalories}
          //restOfSports={restOfSports}
          />
          <div>
            <span>ProductsTable</span> <span>ExercisesTable</span>
          </div>
        </DiaryContainer>
      </DiaryWrapper>
  );
};

export default DiaryPage;
