import { useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive';
import SvgCustom from '../SvgCustom';
import DiaryMobileTable from '../DiaryMobileTable';
import theme from '../../styles/theme.js';
import {
  DiaryNotFoundText,
  DiaryTableHeader,
  DiaryTablesWrap,
  Link,
} from './DiaryTableForWhat.styled';
import { deleteExercise, deleteProduct } from '../../redux/diary/operations.js';

const DiaryTableForWhat = ({
  list,
  date,
  to,
  forExercisesTable,
  forProductsTable,
}) => {
  const dispatch = useDispatch();
  console.log(list);

  const onDiaryDelete = (id) => {
    forExercisesTable
      ? dispatch(deleteExercise({ id, date }))
      : dispatch(deleteProduct({ id, date }));
  };
  return (
    <DiaryTablesWrap list={list}>
      <DiaryTableHeader>
        <p>{forExercisesTable ? 'Exercises' : 'Products'}</p>
        <Link to={to}>
          Add {forExercisesTable ? 'exercise' : 'product'}
          <SvgCustom icon="icon-next" size="16" color={theme.colors.primary} />
        </Link>
      </DiaryTableHeader>

      {list ? (
        <MediaQuery maxWidth={767}>
          <DiaryMobileTable
            list={list}
            date={date}
            forExercisesTable={forExercisesTable}
            forProductsTable={forProductsTable}
            onDelete={onDiaryDelete}
          />
        </MediaQuery>
      ) : (
        <DiaryNotFoundText>
          Not found {forExercisesTable ? 'exercises' : 'products'}
        </DiaryNotFoundText>
      )}
    </DiaryTablesWrap>
  );
};

export default DiaryTableForWhat;
