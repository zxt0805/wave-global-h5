export interface BaseResponse {
  result: CollectionInfo
  error_message: string
  error_code: number
}

export interface CollectionInfo {
  id: number
  name: string
  image: string
  banner: string
  symbol: string
  description: string
  picture_description: string
  license_url: string
  sell_status: number
  sell_price: string
  system_time: number
  sell_start_time: number
  reveals_time: number
  buy_quantity_limit: number
  box_total: number
  sold_quantity: number
  is_bought: number
  specifications: Specifications
}

export interface Specifications {
  chain_id: number
  contract_address: string
  token_standard: string
  block_chain: string
  creator_earnings: string
}
