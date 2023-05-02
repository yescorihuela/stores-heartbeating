class ChangeStoreAddressColumn < ActiveRecord::Migration[7.0]
  def up
    change_table :stores do |t|
      t.change :address, :string
    end
  end

  def down
    change_table :stores do |t|
      t.change :address, :text
    end
  end
end