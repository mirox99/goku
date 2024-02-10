import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import AuthLayout from '../../layouts/AuthLayout';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { handleSignUpConfirmation } from '../../services/auth';
import { HelperText } from 'react-native-paper';

const styles = StyleSheet.create({
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    marginLeft: 10
  },
  focusCell: {
    borderColor: '#000',
  },
});

const CELL_COUNT = 6;

const Confirm = ({ route, navigation }) => {
  const { userName } = route.params;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const { execute: signUpConfirmation, error } = handleSignUpConfirmation(navigation)

  useEffect(() => {
    if (value.length === CELL_COUNT) {
      signUpConfirmation({ username: userName, confirmationCode: value })
    }
  }, [value])

  return (
    <AuthLayout>
      <Text style={{
        fontSize: 28, fontWeight: 'bold', marginBottom: 40
      }}>Enter Code</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </AuthLayout>
  );
};

export default Confirm;