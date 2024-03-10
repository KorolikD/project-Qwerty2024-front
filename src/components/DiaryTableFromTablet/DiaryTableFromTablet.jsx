import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors.js';
import SvgCustom from '../SvgCustom/SvgCustom.jsx';
import theme from '../../styles/theme.js';
import {
  DiaryBtn,
  DiaryTable,
  TableCell,
  TableProductsHead,
  TableProductsBody,
  TableExersicesHead,
  TableExercisesBody,
  DiaryTablesStyles,
} from './DiaryTableFromTablet.styled.js';

const DiaryTableFromTablet = ({
  list,
  forExercisesTable,
  forProductsTable,
  onDelete,
}) => {
  const { blood } = useSelector(selectUser);

  return (
    <>
      {forExercisesTable && (
        <DiaryTable height="154">
          <TableExersicesHead>
            <tr>
              <th>Body Part</th>
              <th>Equipment</th>
              <th>Name</th>
              <th>Target</th>
              <th>Burned Calories</th>
              <th>Time</th>
              <th></th>
            </tr>
          </TableExersicesHead>

          <TableExercisesBody>
            {list.map((exercise) => (
              <tr key={exercise._id}>
                <TableCell>{exercise.exerciseId.bodyPart}</TableCell>
                <TableCell>{exercise.exerciseId.equipment}</TableCell>
                <TableCell>{exercise.exerciseId.name}</TableCell>
                <TableCell>{exercise.exerciseId.target}</TableCell>
                <TableCell>{exercise.burnedCalories}</TableCell>
                <TableCell>{exercise.time}</TableCell>
                <td>
                  <DiaryBtn
                    onClick={() => {
                      onDelete({ id: exercise._id });
                    }}
                  >
                    <SvgCustom
                      icon="icon-trash"
                      size="20"
                      stroke={theme.colors.secondary}
                    />
                  </DiaryBtn>
                </td>
              </tr>
            ))}
          </TableExercisesBody>
        </DiaryTable>
      )}
      {forProductsTable && (
        <DiaryTable height="154">
          <TableProductsHead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Calories</th>
              <th>Weight</th>
              <th>Recommend</th>
              <th></th>
            </tr>
          </TableProductsHead>

          <TableProductsBody>
            {list.map((product) => (
              <tr key={product._id}>
                <TableCell>{product.productId.title}</TableCell>
                <TableCell>{product.productId.category}</TableCell>
                <TableCell>{product.calories}</TableCell>
                <TableCell>{product.weight}</TableCell>
                <TableCell
                  $recommend
                  $color={product.productId.groupBloodNotAllowed[blood]}
                >
                  {product.productId.groupBloodNotAllowed[blood] ? 'Yes' : 'No'}
                </TableCell>
                <td>
                  <DiaryBtn
                    onClick={() => {
                      onDelete({ id: product._id });
                    }}
                  >
                    <SvgCustom
                      icon="icon-trash"
                      size="20"
                      stroke={theme.colors.secondary}
                    />
                  </DiaryBtn>
                </td>
              </tr>
            ))}
          </TableProductsBody>
        </DiaryTable>
      )}
      <DiaryTablesStyles />
    </>
  );
};

export default DiaryTableFromTablet;
