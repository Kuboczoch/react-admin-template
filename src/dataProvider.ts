//Remove no check after cloning
//@ts-nocheck

import { DataProvider } from 'ra-core/src/types'

const dataProvider: DataProvider = {
  getList: async (resource, params) => Promise,
  getOne: async (resource, params) => Promise,
  getMany: async (resource, params) => Promise,
  getManyReference: (resource, params) => Promise,
  create: async (resource, params) => Promise,
  update: async (resource, params) => Promise,
  updateMany: (resource, params) => Promise,
  delete: async (resource, params) => Promise,
  deleteMany: (resource, params) => Promise,
}

export default dataProvider
