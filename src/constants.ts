import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BIG_DECIMAL_1E6 = BigDecimal.fromString('1e6')

export const BIG_DECIMAL_1E12 = BigDecimal.fromString('1e12')

export const BIG_DECIMAL_1E18 = BigDecimal.fromString('1e18')

export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')

export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')

export const BIG_INT_ONE = BigInt.fromI32(1)

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400)

export const BIG_INT_ZERO = BigInt.fromI32(0)

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29)

export const FACTORY_ADDRESS = Address.fromString('0x8696BDE5Cc30545b3b049f3529abBfB2B1e0C007')

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148)

export const MASTER_CHEF_ADDRESS = Address.fromString('0x2Bf120458d1270d0f666Cc75a70E8379270bC6e3')

export const SUSHI_BAR_ADDRESS = Address.fromString('0x79161Df977AA152152BA8D07F701A14376f8207E')

export const SUSHI_MAKER_ADDRESS = Address.fromString('0xFCe761d7e0d99300897De97025558670bB269dD2')

export const SUSHI_TOKEN_ADDRESS = Address.fromString('0x719c3aBF7c2435Be34eD479b98db85342d107755')


// Will update later
export const SUSHI_USDT_PAIR_ADDRESS = Address.fromString('0xF40eDdD5652Ca16e2C97B93112a7498DCc47d81c')

export const XSUSHI_USDC_PAIR_ADDRESS = Address.fromString('0xd597924b16cc1904d808285bc9044fd51ceeead7')

export const XSUSHI_WETH_PAIR_ADDRESS = Address.fromString('0x36e2fcccc59e5747ff63a03ea2e5c0c2c14911e7')

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'

export const USDC_WETH_PAIR = '0x1cf74bebb1974ecd077a308e07b5ef012a49aa98'

export const DAI_WETH_PAIR = '0x3f051df334f3b8d8aa70cc5374379f36a64f4b70'

export const USDT_WETH_PAIR = '0x3bc6b9602568c1088a29a888f9661f57757e349f'

export const SUSHI_USDT_PAIR = '0x8C79B8b0004236ea22CF616210c38428e8a26d3d'

export const WHITELIST: string[] = [
  '0x719c3abf7c2435be34ed479b98db85342d107755', // unic
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
  '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
  '0x6b175474e89094c44da98b954eedeac495271d0f' // DAI
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('0')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0')

export const WETH_ADDRESS = Address.fromString('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')

export const SUSHISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x3bc6b9602568c1088a29a888f9661f57757e349f')

export const USDT_ADDRESS = Address.fromString('0xdac17f958d2ee523a2206206994597c13d831ec7')

export const MASTER_CHEF_START_BLOCK = BigInt.fromI32(8061950)

export const SUSHISWAP_WETH_USDT_PAIR_DEPLOY_BLOCK = BigInt.fromI32(99999999)

export const UNISWAP_FACTORY_ADDRESS = Address.fromString('0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f')

// Need to change when liquidity is provided
export const UNISWAP_SUSHI_ETH_PAIR_FIRST_LIQUDITY_BLOCK = BigInt.fromI32(12149650)

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString('0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852')

export const UNISWAP_SUSHI_ETH_PAIR_ADDRESS = Address.fromString('0xce84867c3c02b05dc570d0135103d3fb9cc19433')

export const UNISWAP_SUSHI_USDT_PAIR_ADDRESS = Address.fromString('0xe3ffab89e53422f468be955e7011932efe80aa26')
