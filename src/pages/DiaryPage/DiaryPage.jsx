import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { selectUser } from '../../redux/auth/authSelectors.js';
import { getDayInfo } from '../../services/api/diary.js';
import DaySwitch from '../../components/DaySwitch/index.js';
import DayDashboard from '../../components/DayDashboard/index.js';
import { DiaryContainer, DiaryWrapper } from './DiaryPage.styled.js';

const DATE_FORMAT = 'DD/MM/YYYY';

const DiaryPage = () => {
  const [date, setDate] = useState(dayjs().format(DATE_FORMAT));
  const [exercisesList, setExercisesList] = useState(null);
  const [productsList, setProductsList] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);
  const [timeSpentOnExercises, setTimeSpentOnExercises] = useState(0);

  const {
    bmr,
    dpa,
    //  blood, createdAt
  } = useSelector(selectUser);

  const restOfCalories = bmr - totalCalories;
  const restOfSports = dpa - timeSpentOnExercises;

  useEffect(() => {
    if (date === null) {
      return;
    }
    const fetchDayInfo = async () => {
      try {
        const resp = await getDayInfo(date);
        // Якщо повернено повідомлення, що немає нічого, виходимо
        if (resp.message) {
          return;
        }
        // Якщо повернено не null у userProductsDiary, записуємо дані
        if (resp.userProductsDiary) {
          setProductsList(resp.userProductsDiary.products);
          setTotalCalories(resp.userProductsDiary.totalCalories);
        }
        // Якщо повернено не null у userExercisesDiary, записуємо дані
        if (resp.userExercisesDiary) {
          setExercisesList(resp.userExercisesDiary.exercises);
          setBurnedCalories(resp.userExercisesDiary.burnedCalories);
          setTimeSpentOnExercises(resp.userExercisesDiary.totalTime);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDayInfo();
  }, [date]);

  const onChangeDate = (newDate) => {
    setDate(newDate);
  };

  return (
    <DiaryWrapper>
      <div>
        <div>
          Title + <DaySwitch />
        </div>
      </div>
      <DiaryContainer>
        <DayDashboard
          bmr={bmr}
          dpa={dpa}
          totalCalories={totalCalories}
          burnedCalories={burnedCalories}
          restOfCalories={restOfCalories}
          restOfSports={restOfSports}
          //Wі 3 пропси будуть видалені звідси, зараз по іншому не можу зараз запушити той код, що є, не використавши десь їх
          //Закоментувати теж не можу, бо впливає на масив залежностей і циклиться компонент
          exercisesList={exercisesList}
          productsList={productsList}
          onChange={onChangeDate}
        />
        <div>
          <span>ProductsTable</span> <span>ExercisesTable</span>
        </div>
      </DiaryContainer>
    </DiaryWrapper>
  );
};

export default DiaryPage;
