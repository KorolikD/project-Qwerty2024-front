import SvgCustom from '../SvgCustom/index.js';
import theme from '../../styles/theme.js';
import { AttentionDiv, DashboardItem, DashboardList, DashboardSection, DashboardText, SvgTextWrap } from './DayDashboard.styled.js';

const DayDashboard = () =>
  // {bmr,
  // dpa,
  // caloriesConsumed='0',
  // caloriesBurned='0,
  // restOfCalories,
  // restOfSports,}
  {
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
            <DashboardText>bmr</DashboardText>
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
            <DashboardText>dpa min</DashboardText>
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
            <DashboardText>caloriesC</DashboardText>
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
            <DashboardText>caloriesB</DashboardText>
          </DashboardItem>
          <DashboardItem>
            <SvgTextWrap>
              <SvgCustom
                icon="icon-bubble"
                size="20"
                color={theme.colors.secondary}
              />
              <p>Calories remaining</p>
            </SvgTextWrap>
            <DashboardText>restOfC</DashboardText>
          </DashboardItem>
          <DashboardItem>
            <SvgTextWrap>
              <SvgCustom
                icon="icon-running"
                size="20"
                color={theme.colors.secondary}
              />
              <p>Sports remaining</p>
            </SvgTextWrap>
            <DashboardText>rest min</DashboardText>
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
