import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableCell,
  TableRow,
  makeStyles,
} from "@material-ui/core";
import GenericSectionsTableItem from "./GenericSectionsTableItem";
import styles from "../../../styles/Styles";

const useStyles = makeStyles((theme) => styles(theme));

const GenericSectionsTable = (props) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.editModeGenericSectionsTableHeaderCell}
            >
              Title
            </TableCell>
            <TableCell
              className={classes.editModeGenericSectionsTableHeaderCell}
            >
              Sub-Title
            </TableCell>
            <TableCell
              className={classes.editModeGenericSectionsTableHeaderCell}
            >
              Body
            </TableCell>
            <TableCell
              className={classes.editModeGenericSectionsTableHeaderCell}
            >
              Media
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.genericSectionsList.map((genericSectionsItem, index) => {
            return (
              <GenericSectionsTableItem
                key={`${index}-${genericSectionsItem}`}
                index={index}
                value={genericSectionsItem}
                onRemoveGenericSection={props.onRemoveGenericSection}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GenericSectionsTable;
