import { useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive';
import { deleteExercise, deleteProduct } from '../../redux/diary/operations.js';
import SvgCustom from '../SvgCustom';
import DiaryMobileTable from '../DiaryMobileTable';
import DiaryTableFromTablet from '../DiaryTableFromTablet';
import theme from '../../styles/theme.js';
import {
  DiaryNotFoundText,
  DiaryTableHeader,
  DiaryTablesWrap,
  Link,
} from './DiaryTableForWhat.styled';

const DiaryTableForWhat = ({
  list,
  date,
  to,
  forExercisesTable,
  forProductsTable,
}) => {
  const dispatch = useDispatch();
  
  const heightCondition =
    list && list.length !== undefined && list.length !== 0 ? 'yes' : 'no';
  const listCondition = list && list.length !== undefined && list.length !== 0;

  const onDiaryDelete = ({ id }) => {
    forExercisesTable
      ? dispatch(deleteExercise({ id, date }))
      : dispatch(deleteProduct({ id, date }));
  };
  return (
    <DiaryTablesWrap list={heightCondition}>
      <DiaryTableHeader>
        <p>{forExercisesTable ? 'Exercises' : 'Products'}</p>
        <Link to={to}>
          Add {forExercisesTable ? 'exercise' : 'product'}
          <SvgCustom
            icon="icon-next"
            size="24"
            color={theme.colors.primary}
            hover={theme.colors.secondary}
          />
        </Link>
      </DiaryTableHeader>

      {listCondition ? (
        <>
          <MediaQuery maxWidth={767}>
            <DiaryMobileTable
              list={list}
              date={date}
              forExercisesTable={forExercisesTable}
              forProductsTable={forProductsTable}
              onDelete={onDiaryDelete}
            />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <DiaryTableFromTablet
              list={list}
              date={date}
              forExercisesTable={forExercisesTable}
              forProductsTable={forProductsTable}
              onDelete={onDiaryDelete}
            />
          </MediaQuery>
        </>
      ) : (
        <DiaryNotFoundText>
          Not found {forExercisesTable ? 'exercises' : 'products'}
        </DiaryNotFoundText>
      )}
    </DiaryTablesWrap>
  );
};

export default DiaryTableForWhat;
