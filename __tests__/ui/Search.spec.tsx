import { fireEvent, render } from "@testing-library/react-native";
import Search from '../../src/ui/Search'
import React from 'react'
import {NativeBaseProvider} from 'native-base'

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
}

test('Renders input field', () => {
  const {getByPlaceholderText} = render(<Search onSearch={() => null} />, {
    wrapper: ({children}) => (
      <NativeBaseProvider initialWindowMetrics={inset}>
        {children}
      </NativeBaseProvider>
    ),
  })

  expect(getByPlaceholderText(/search for pokemon/i)).toBeTruthy()
})

test('Call onSearch when user enters char', () => {
  const onSearch = jest.fn()

  const {getByPlaceholderText} = render(<Search onSearch={onSearch} />, {
    wrapper: ({children}) => (
      <NativeBaseProvider initialWindowMetrics={inset}>
        {children}
      </NativeBaseProvider>
    ),
  })

  const input = getByPlaceholderText(/search for pokemon/i)

  fireEvent.changeText(input, 'a')

  expect(onSearch).toHaveBeenCalledTimes(1)
  expect(onSearch).toHaveBeenCalledWith('a')
})
