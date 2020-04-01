import React, { PureComponent } from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import DrawerLayout from 'react-native-drawer-layout-polyfill'
import stripe from 'tipsi-stripe'
import Header from './src/components/Header'
import MenuItem from './src/components/MenuItem'
import ApplePayScreen from './src/scenes/ApplePayScreen'
import AndroidPayScreen from './src/scenes/AndroidPayScreen'
import CardFormScreen from './src/scenes/CardFormScreen'
import CustomCardScreen from './src/scenes/CustomCardScreen'
import CustomBankScreen from './src/scenes/CustomBankScreen'
import CardTextFieldScreen from './src/scenes/CardTextFieldScreen'
import SourceScreen from './src/scenes/SourceScreen'
import testID from './src/utils/testID'

stripe.setOptions({
  publishableKey: 'pk_test_ZdvotcrtHWQcbxu3dfAfhhN200JZPJVzMe',
  merchantId: 'jvandres247@gmail.com',
  androidPayMode: 'test',
  })


export default class TestStripe extends PureComponent {
  state = {
    index: 0,
    isDrawerOpen: false,
    routes: [
      Platform.select({
        ios: ApplePayScreen,
        android: CardFormScreen,
      }),
      CardFormScreen,
      CustomCardScreen,
      CustomBankScreen,
      CardTextFieldScreen,
      SourceScreen,
    ].filter(item => item),
  }

  getCurrentScene = () => this.state.routes[this.state.index]

  handleChangeTab = (index) => {
    this.drawer.closeDrawer()
    this.setState({ index })
  }

  handleDrawerRef = (node) => {
    this.drawer = node
  }

  handleMenuPress = () => {
    if (this.state.isDrawerOpen) {
      this.drawer.closeDrawer()
    } else {
      this.drawer.openDrawer()
    }
  }

  handleDrawerOpen = () => {
    this.setState({ isDrawerOpen: true })
  }

  handleDrawerClose = () => {
    this.setState({ isDrawerOpen: false })
  }

  /* eslint-disable react/no-array-index-key */
  renderNavigation = () => (
    <View style={styles.drawer}>
      {this.state.routes.map((Scene, index) => (
        <MenuItem
          key={index}
          title={Scene.title}
          active={this.state.index === index}
          onPress={() => this.handleChangeTab(index)}
          {...testID(Scene.title)}
        />
      ))}
    </View>
  )

  render() {
    const Scene = this.getCurrentScene()

    return (
      <View style={styles.container}>
        <View style={styles.statusbar} />
        <Header title={`Example: ${Scene.title}`} onMenuPress={this.handleMenuPress} />
        <DrawerLayout
          drawerWidth={200}
          drawerPosition={DrawerLayout.positions.Left}
          renderNavigationView={this.renderNavigation}
          onDrawerOpen={this.handleDrawerOpen}
          onDrawerClose={this.handleDrawerClose}
          ref={this.handleDrawerRef}>
          <Scene />
        </DrawerLayout>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  statusbar: {
    height: Platform.select({ ios: 20, android: 0 }),
  },
  drawer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
})
