export interface Icon {
  icon_id: string,
  icon_url?: string,
  tags?: string[],
}

// needed this bc linting errors from trying to map the original Icon from the API
export interface IconAPI {
  icon_id: string,
  raster_sizes: { formats: { preview_url: string }[] }[],
  tags?: string[],
}