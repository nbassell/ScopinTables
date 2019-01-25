class RemoveTypoColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, "#<ActiveRecord::ConnectionAdapters::PostgreSQL::TableDefinition"
  end
end
