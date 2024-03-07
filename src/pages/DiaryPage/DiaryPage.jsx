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
    // blood,
    createdAt,
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
        // Якщо повернено повідомлення, що немає нічого, очищаємо дані
        if (resp.message) {
          setTotalCalories(0);
          setBurnedCalories(0);
          setTimeSpentOnExercises(0);
        }
        // Якщо повернено не null у userProductsDiary і null у userExercisesDiary, записуємо дані продуктів та очищаємо вправи
        if (resp.userProductsDiary && !resp.userExercisesDiary) {
          setProductsList(resp.userProductsDiary.products);
          setTotalCalories(resp.userProductsDiary.totalCalories);
          setBurnedCalories(0);
          setTimeSpentOnExercises(0);
        }
        // Якщо повернено не null у userExercisesDiary і null у userProductsDiary, записуємо дані вправ та очищаємо продукти
        if (resp.userExercisesDiary && !resp.userProductsDiary) {
          setExercisesList(resp.userExercisesDiary.exercises);
          setBurnedCalories(resp.userExercisesDiary.burnedCalories);
          setTimeSpentOnExercises(resp.userExercisesDiary.totalTime);
          setTotalCalories(0);
        }
        // коли немає null ніде, записуємо
        if (resp.userExercisesDiary && resp.userProductsDiary) {
          setProductsList(resp.userProductsDiary.products);
          setTotalCalories(resp.userProductsDiary.totalCalories);
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

  return (
    <DiaryWrapper>
      <div>
        <div>
          Title +{' '}
          <DaySwitch date={date} setDate={setDate} minDate={createdAt} />
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
          //Ці 2 пропси будуть видалені звідси, зараз по іншому не можу запушити той код, що є, не використавши десь їх
          //Закоментувати теж не можу, бо впливає на масив залежностей і циклиться компонент
          exercisesList={exercisesList}
          productsList={productsList}
        />
        <div>
          <span>ProductsTable</span> <span>ExercisesTable</span>
        </div>
      </DiaryContainer>
    </DiaryWrapper>
  );
};

export default DiaryPage;
