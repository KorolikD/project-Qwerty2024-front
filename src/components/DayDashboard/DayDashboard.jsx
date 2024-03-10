import SvgCustom from '../SvgCustom/index.js';
import theme from '../../styles/theme.js';
import {
  AttentionDiv,
  DashboardItem,
  DashboardList,
  DashboardSection,
  DashboardText,
  SvgTextWrap,
} from './DayDashboard.styled.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors.js';
import {
  selectBurnedCalories,
  selectTimeSpentOnExercises,
  selectTotalCalories,
} from '../../redux/diary/selectors.js';

const DayDashboard = () => {
  const { bmr, dpa } = useSelector(selectUser);
  const totalCalories = useSelector(selectTotalCalories);
  const burnedCalories = useSelector(selectBurnedCalories);
  const timeSpentOnExercises = useSelector(selectTimeSpentOnExercises);

  const restOfSports = dpa - timeSpentOnExercises;
  const restOfCalories = bmr - totalCalories;

  const caloriesIndicator = restOfCalories < 0 ? 'red' : 'green';
  const timeIndicator = restOfSports < 0 ? 'green' : 'red';

  return (
    <DashboardSection>
      <DashboardList>
        <DashboardItem>
          <SvgTextWrap>
            <SvgCustom
              icon="icon-food"
              size="20"
              color={theme.colors.secondary}
            />
            <p>Daily calorie intake</p>
          </SvgTextWrap>
          <DashboardText>{bmr}</DashboardText>
        </DashboardItem>
        <DashboardItem>
          <SvgTextWrap>
            <SvgCustom
              icon="icon-dumbbell"
              size="20"
              color={theme.colors.secondary}
            />
            <p>Daily physical activity</p>
          </SvgTextWrap>
          <DashboardText>{dpa} min</DashboardText>
        </DashboardItem>
        <DashboardItem>
          <SvgTextWrap>
            <SvgCustom
              icon="icon-apple"
              size="20"
              color={theme.colors.secondary}
            />
            <p>Calories consumed</p>
          </SvgTextWrap>
          <DashboardText>{totalCalories}</DashboardText>
        </DashboardItem>
        <DashboardItem>
          <SvgTextWrap>
            <SvgCustom
              icon="icon-apple"
              size="20"
              color={theme.colors.secondary}
            />
            <p>Calories burned</p>
          </SvgTextWrap>
          <DashboardText>{burnedCalories}</DashboardText>
        </DashboardItem>
        <DashboardItem $border={caloriesIndicator}>
          <SvgTextWrap>
            <SvgCustom
              icon="icon-bubble"
              size="20"
              color={theme.colors.secondary}
            />
            <p>Calories remaining</p>
          </SvgTextWrap>
          <DashboardText>
            {!caloriesIndicator && '-'}
            {restOfCalories}
          </DashboardText>
        </DashboardItem>
        <DashboardItem $border={timeIndicator}>
          <SvgTextWrap>
            <SvgCustom
              icon="icon-running"
              size="20"
              color={theme.colors.secondary}
            />
            <p>Sports remaining</p>
          </SvgTextWrap>
          <DashboardText>
            {timeIndicator && '+'}
            {restOfSports} min
          </DashboardText>
        </DashboardItem>
      </DashboardList>
      <AttentionDiv>
        <div>
          <SvgCustom icon="icon-next" size="24" color={theme.colors.white} />
        </div>
        <p>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </p>
      </AttentionDiv>
    </DashboardSection>
  );
};

export default DayDashboard;
